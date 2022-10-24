'use strict';

/**
 *  order controller
 */
const { sanitize } = require('@strapi/utils');
const { createCoreController } = require('@strapi/strapi').factories;
const GUEST_ID=22
module.exports = createCoreController('api::order.order',({strapi})=>({
    async place(ctx){
        const {shippingAddress,shippingInfo,shippingOption,subtotal,tax,total,items}=ctx.request.body            
        let orderCustomer=ctx.state.user.id
        
       
        let serverTotal=0;
        let unavailable=[];
        await Promise.all(
            items.map(async (clientItem)=>{
                
                const serverItem=await strapi.service("api::variant.variant").findOne(
                clientItem.variant.strapi_id)
                console.log(serverItem)
                if(serverItem.qty<clientItem.qty){
                    unavailable.push({id:serverItem.id,qty:serverItem.qty})
                }
                else{
                    
                    await strapi.service("api::variant.variant").update(clientItem.variant.strapi_id,{
                        data:{
                            qty:serverItem.qty-clientItem.qty
                        }
                    });
                }
                serverTotal+=serverItem.Price*clientItem.qty
            })
            );
            const shippingOptions=[ 
                {label:'Free Shipping',price:0},
                {label:'2-Days Shipping',price:50},
                {label:'Over Night Shipping',price:100}
            ]
            const shippingValid=shippingOptions.find(option=>option.label===shippingOption.label&&option.price===shippingOption.price)
            if(shippingValid===undefined||((serverTotal*1.05+shippingValid.price).toFixed(2)!==total)){
                await strapi.service("api::variant.variant").update(clientItem.variant.strapi_id,{
                    data:{
                        qty:serverItem.qty
                    }
                });
                ctx.send({error:'Invalid Cart'},400)
            }else if(unavailable.length>0){
                ctx.send({unavailable},409)
            }else{
                var order=await strapi.service("api::order.order").create({
                    data:{
                        shippingAddress,shippingInfo,shippingOptions,subtotal,tax,total,items,users_permissions_user:orderCustomer
                    }
                })
            const sanitizedEntity = await sanitize.contentAPI.output(order);
            ctx.send({data:sanitizedEntity},200)
        }
    }
}));

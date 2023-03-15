module.exports=()=>(
    {email:{
    provider:'sendGrid',
    providerOptions:{
    apiKey:'sjjdjiewi238283bsxjajs'
    },
    settings:{
        defaultFrom:'varx4coder@gmail.com',
        defaultTo:'varx4coder@gmail.com'
    }
    },
    upload: {
        config: {
          provider: 'cloudinary',
          providerOptions: {
            cloud_name: 'dct83clkw',
            api_key: '279773746343921',
            api_secret: 'yHFQfW_cyXspXvmTvTLMIieODZQ',
          },
          actionOptions: {
            upload: {},
            delete: {},
          },
        },
      }}
)
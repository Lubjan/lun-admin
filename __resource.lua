resource_manifest_version '44febabe-d386-4d18-afbe-5e627f4af937'

dependency 'webpack'
dependency 'yarn'

webpack_config 'client.config.js'
webpack_config 'server.config.js'

client_script 'dist/client.js'
server_script 'dist/server.js'

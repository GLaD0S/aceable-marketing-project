# Aceable Marketing Project: David Broadlick

## Notes

### To Run

Node was only used to create a simple http server in order to perform proper ajax calls between my frontend and Aceable's api endpoint. In order to get setup install [yarn](https://yarnpkg.com/lang/en/docs/install/#mac-stable) and run the command 'yarn'. In order to launch the http server simply run 'yarn run http-server' and navigate to the second ip address listed in the terminal. You could also simply place the json from the endpoint directly into the Vue component at app.data.products.

### Project Notes

I extended the features every so slighly from the project requirements. I added the ability to sort on price by clicking the table head with "Price (US)". I realize as a marketing developer that I would most likely not place this sort of information within a table and I would not deviate from the specs without a conversation but I wanted to use another feature of Vue's 'Reactive' nature other than simply pulling in the data.

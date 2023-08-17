# React-hadiths
This SDK supplies easy access to Hadiths - API resources.

### Features

This is a a list of unique features this project comprise of;

- Get all hadiths
- Get a single hadith
- Get hadiths by collection
- TCategorized hadiths by categories and collection
- Easy to search and limit the number of hadiths

### How to use

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Install NPM package

   ```sh
   npm install react-hadiths

   yarn react-hadiths
   ```

2. Visit to subscribe free of charge, no atm required. [Hadiths API](https://rapidapi.com/BigYusuf/api/hadiths-api/).

3. Usage
Get all hadiths

   ```js
    import Hadith from "react-hadiths"
        const client = new Hadith({
            apiKey: "ENTER YOUR API KEY"
        });
        client.getAlltHadiths().then((item) => 
            console.log(item)
        )

   ```

Get a single Hadith by ID

   ```js
    import Hadith from "react-hadiths"
        const client = new Hadith({
            apiKey: "ENTER YOUR API KEY"
        });
        let id ="639b1ed040467f67664485cb"
        client.getHadithById(id).then((item) => 
            console.log(item)
        )
   ```

Get Hadith by collection

   ```js
    import Hadith from "react-hadiths"
        const client = new Hadith({
            apiKey: "ENTER YOUR API KEY"
        });
        let collection ="Sahih Muslim"
        client.getHadithsByCollection(collection).then((item) => 
            console.log(item)
        )
   ```

Get Hadith by category and collection

   ```js
    import Hadith from "react-hadiths"
        const client = new Hadith({
            apiKey: "ENTER YOUR API KEY"
        });
        let collection ="Sahih Muslim"
        let category ="Introduction"
        client.getHadithsByCategory(collection, category).then((item) => 
            console.log(item)
        )
   ```

Search for words

   ```js
    import Hadith from "react-hadiths"
        const client = new Hadith({
            apiKey: "ENTER YOUR API KEY"
        });
        let search ="food"
        client.searchHadiths(search).then((item) => 
            console.log(item)
        )
   ```


## Learn More

You can learn more in the [Hadiths API](https://rapidapi.com/BigYusuf/api/hadiths-api/).
Visit the [Github](https://github.com/BigYusuf/react-hadiths#readme).

### Setting up the React application

Step 1: cd desktop

Step 2: npx create-react-app "your-project-name"

Step 3: npx create-react-app;

### Creating a GitHub repository

Step 4: git init

Step 5: Run the following commands:

```
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/MdShehabulIslam/Portfolio.git
git push -u origin main
```

### Install gh-pages packages in our project

Step 6: npm install gh-pages --save-dev

Step 7: In the package.json file, add the following command:

"homepage": "https://MdShehabulIslam.github.io/Portfolio",

Step 8: In the package.json file, go to the scripts property and add the following commands:

```
"predeploy" : "npm run build",
"deploy" : "gh-pages -d build",
```

### Now Commit the changes and push the code to the repository

Step 9: Run the following commands:

```
git add .
git commit -m "setup gh-pages"
git push
```

Step 10: npm run deploy

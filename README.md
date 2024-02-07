# How to run
```bash
npm install
npm run dev
```

# How to reproduce UI lag when loading nodes
1. `npm run build`.
2. `npm run start`.
3. Open http://localhost:3000 in the browser, then click the "Load State" button in the page.
4. Open your browser's developer tools and switch to the console tab so that it shows the log.
5. Open the file "data/thousand-buttons.json" in your project.
6. Copy the content of the file to the text input box in your browser and click the "Load" button.
7. After waiting a few seconds for those nodes to be loaded, you can see something like `[Violation] 'click' handler took 3539ms` in the console.

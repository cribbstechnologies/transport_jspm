# transport_jspm

To setup, run:
```
npm install
jspm install
```

and then to run the server
```
npm start
```

Then open the browser to http://localhost:8080/dist

There is a node file called copyHtml.js that does the heavy lifting of copying the html files from the app directory into the directory where they are published.

The following scripts are available

To remove and re-create the public folder
```
npm run clean
```

The bundle that's built does not use minified javascript. If you'd like it to you can modify the script build:ts to:
```
npm run build:bundle && npm run build:uglify && npm run build:html
```

The npm module parallelscript is used in several scripts to fork execution of script that can run at the same time. In the npm start script it is used to both start the live-server as well as start the rerun-script that monitors the values specified in the watches section.
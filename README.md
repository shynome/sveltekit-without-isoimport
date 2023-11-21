# error

```log
8:47:38 am [vite] Error when evaluating SSR module /src/routes/+page.svelte: failed to import "/src/lib/index.ts"
|- ReferenceError: document is not defined
    at enableDismissTrigger (/home/shynome/work/tmp/kit-without-iso/node_modules/bootstrap/dist/js/bootstrap.js:826:21)
    at /home/shynome/work/tmp/kit-without-iso/node_modules/bootstrap/dist/js/bootstrap.js:908:3
    at /home/shynome/work/tmp/kit-without-iso/node_modules/bootstrap/dist/js/bootstrap.js:7:83
    at Object.<anonymous> (/home/shynome/work/tmp/kit-without-iso/node_modules/bootstrap/dist/js/bootstrap.js:10:3)
    at Module._compile (node:internal/modules/cjs/loader:1256:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1310:10)
    at Module.load (node:internal/modules/cjs/loader:1119:32)
    at Module._load (node:internal/modules/cjs/loader:960:12)
    at ModuleWrap.<anonymous> (node:internal/modules/esm/translators:169:29)
    at ModuleJob.run (node:internal/modules/esm/module_job:194:25)
```
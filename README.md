# What is this?

It appears when using dd-trace, promises are resolved to Symbols, and therefore promise comparison cannot occur. That said, promise comparison should probably not be taking place anyhow due to the fact that Jest cannot compare promises (here is an article on the same issue with Jasmine: https://github.com/jasmine/jasmine/issues/1543. Though obviously Jest != Jasmine, the idea is the same - promise cannot be compared because they do not expose any properties to perform the comparison).

## How to use

Run `npm run test`, you should see the test pass.

Then run `npn run test:ci`, which includes `dd-trace`, and you'll see the same test fail.

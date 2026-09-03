# insu-assets

Public host for the InSu Dynamics site bundle.

`insu-boot.js` is the site's markup and animation layer. It is loaded by
Wix Custom Code via jsDelivr:

```html
<script src="https://cdn.jsdelivr.net/gh/Prajwal434/insu-assets@main/insu-boot.js"></script>
```

This file has to live at a public URL because Wix Custom Code caps each
snippet at 15,000 characters and the bundle is ~73KB. Nothing here is
secret — the browser downloads all of it on every page view anyway.

To update the live site: edit, commit, push. jsDelivr caches aggressively,
so purge with:
https://purge.jsdelivr.net/gh/Prajwal434/insu-assets@main/insu-boot.js

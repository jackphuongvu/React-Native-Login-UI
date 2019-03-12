## Run 1 file SVG
> svgr --native --replace-attr-values “#272066=currentColor” lock.svg -d ../../components/AppIcons/outputs

## Run all SVG files inside folder.
* STEP 1: To create All SVG files to Icon Components
--icon \
```
svgr \
--native \
--template ../../templates/renderIconFile/index.js \
-d ../../components/AppIcons ./ \
--replace-attr-values "#8E8E93={props.fill || styles.inactiveGreyColor}" \
--replace-attr-values "#00B937={props.fill || styles.inactiveGreyColor}" \
--replace-attr-values "#272066={props.fill || styles.inactiveGreyColor}"
```
=> This is magic.
* STEP 2


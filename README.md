
# react-lens-zoom

The Simplest Zoom Module for Your React Components

### Installation

```bash
npm i react-lens-zoom
```

### Usage

```js
import ImageLensZoom from 'react-lens-zoom';

const Example = () => (
  <ImageLensZoom 
    source='https://webkit.org/demos/srcset/image-src.png'
  />
);
```

### Props
|    Property    | Type  |          Description          | Mandatory? | Default |
| -------------  | ----  |          -----------          | ---------- | -------
| source           | String | The Mandatory Image Source | Yes | -
| sourceId           | String | Unique Identifier for Source Image element in DOM | No | sourceImage
| destId           | String | Unique Identifier for Destination Image element in DOM | No | destImage
| sourceClass           | String | Additional ClassName to Source Image Element | No | addSourceClass
| destClass           | String | Additional ClassName to Destination Image Element | No | addDestClass
| sourceWidth           | String | Width of the Source Image | No | 300
| destWidth           | String | Width of the Destination Image | No | 700
| sourceHeight           | String | Height of the Source Image | No | 300
| destHeight           | String | Height of the Destination Image | No | 500
| destSource           | String | Optional Destination Image with Higher Resolution | No | null

### Methods
* `onLoad()`   - Function - Callback once the source Image had been loaded. Signifies the point for zoom calculations.


###
Check out the src/Example for Customized Usage
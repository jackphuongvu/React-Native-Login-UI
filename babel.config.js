module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    "@svgr/babel-plugin-transform-react-native-svg",
    [
      "@svgr/babel-plugin-replace-jsx-attribute-value",
      {
        "values": [
          { "value": "#8E8E93", "newValue": "props.fill", "literal": true }
        ]
      }
    ],
    [
      "@svgr/babel-plugin-add-jsx-attribute",
      {
        "elements": ["svg"],
        "attributes": [
          {
            "name": "width",
            "value": "200",
            "spread": false,
            "literal": false,
            "position": "end"
          }
        ]
      }
    ],
    // [
    //   "@svgr/babel-plugin-remove-jsx-attribute",
    //   {
    //     "elements": ["svg"],
    //     "attributes": ["width", "height"]
    //   }
    // ]
  ]
}

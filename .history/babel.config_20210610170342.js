{
  "presets": [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        "runtime": "automatic"
      }
    ],
    "@babel/preset-typescript"
  ],
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "regenerator": true
      }
    ]
  ],
  "env": {
    "production": {
      "plugins": [
        "emotion"
      ]
    },
    "development": {
      "plugins": [
        [
          "emotion",
          {
            "sourceMap": true
          }
        ]
      ]
    }
  }
}

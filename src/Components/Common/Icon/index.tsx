import React from 'react'
import IcoMoon from 'react-icomoon'

const iconSet = require('./selection.json')

export const Icon = (props) => <IcoMoon iconSet={iconSet} {...props} />

import IcoMoon from 'react-icomoon'

const iconSet = require('./selection.json')

export const Icon = (props: any) => <IcoMoon iconSet={iconSet} {...props} />

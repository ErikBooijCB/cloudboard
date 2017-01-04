export const SECONDARY_KEY = 'Control'

export const RELEASE = 'RELEASE'
export const PRESS = 'PRESS'
export const QUEUE = 'QUEUE'
export const PLAY = 'PLAY'
export const STOPPED = 'STOPPED'
export const TOGGLE_COLLECTION = 'TOGGLE_COLLECTION'
export const TOGGLE_LOCAL_MODE = 'TOGGLE_LOCAL_MODE'
export const LOCATION_CHANGE = '@@router/LOCATION_CHANGE'
export const ADD_FAVORITE = 'ADD_FAVORITE'
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE'
export const CHANGE_BOARD = 'CHANGE_BOARD'

export const COLLAPSED_COLLECTIONS_STORAGE_KEY = 'collapsedCollections'
export const FAVORITES_STORAGE_KEY = 'favorites'
export const LOCAL_MODE_STORAGE_KEY = 'localMode'

export const SOUND_THROTTLE = 500

export const letterIndex = [
  'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']',
  'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\\',
  'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'
]

export const keyCodeMap = {
  8: 'Backspace',
  9: 'Tab',
  13: 'Enter',
  16: 'Shift',
  17: 'Control',
  18: 'Alt',
  19: 'Pause',
  20: 'CapsLock',
  27: 'Escape',
  33: 'PageUp',
  34: 'PageDown',
  35: 'End',
  36: 'Home',
  37: 'LeftArrow',
  38: 'UpArrow',
  39: 'RightArrow',
  40: 'DownArrow',
  45: 'Insert',
  46: 'Delete',
  48: 0,
  49: 1,
  50: 2,
  51: 3,
  52: 4,
  53: 5,
  54: 6,
  55: 7,
  56: 8,
  57: 9,
  65: 'a',
  66: 'b',
  67: 'c',
  68: 'd',
  69: 'e',
  70: 'f',
  71: 'g',
  72: 'h',
  73: 'i',
  74: 'j',
  75: 'k',
  76: 'l',
  77: 'm',
  78: 'n',
  79: 'o',
  80: 'p',
  81: 'q',
  82: 'r',
  83: 's',
  84: 't',
  85: 'u',
  86: 'v',
  87: 'w',
  88: 'x',
  89: 'y',
  90: 'z',
  91: 'LeftWindowKey',
  92: 'RightWindowKey',
  93: 'SelectKey',
  96: 'Numpad0',
  97: 'Numpad1',
  98: 'Numpad2',
  99: 'Numpad3',
  100: 'Numpad4',
  101: 'Numpad5',
  102: 'Numpad6',
  103: 'Numpad7',
  104: 'Numpad8',
  105: 'Numpad9',
  106: 'Multiply',
  107: 'Add',
  109: 'Subtract',
  110: 'DecimalPoint',
  111: 'Divide',
  112: 'f1',
  113: 'f2',
  114: 'f3',
  115: 'f4',
  116: 'f5',
  117: 'f6',
  118: 'f7',
  119: 'f8',
  120: 'f9',
  121: 'f10',
  122: 'f11',
  123: 'f12',
  144: 'NumLock',
  145: 'ScrollLock',
  186: ';',
  187: '=',
  188: ',',
  189: '-',
  190: '.',
  191: '/',
  192: '`',
  219: '[',
  220: '\\',
  221: ']',
  222: '\''
}

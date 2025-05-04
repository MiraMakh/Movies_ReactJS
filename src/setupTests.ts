import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

// Register the global polyfill for `TextEncoder` and `TextDecoder`
global.TextEncoder = TextEncoder as typeof globalThis.TextEncoder;
global.TextDecoder = TextDecoder as typeof globalThis.TextDecoder;
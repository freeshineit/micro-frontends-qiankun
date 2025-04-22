/// <reference types="vite/client" />

declare module 'ezuikit-js';
interface Window {
  $RefreshReg$: () => void;
  $RefreshSig$: () => (type: any) => any;
  __vite_plugin_react_preamble_installed__: boolean;
  __POWERED_BY_QIANKUN__: boolean;
  __INJECTED_PUBLIC_PATH_BY_QIANKUN__: string;
  proxy: any;
  moduleQiankunAppLifeCycles: QiankunAppLifeCycles;
}

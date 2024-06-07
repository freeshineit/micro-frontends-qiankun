// reactRefresh 挂载全局变量实现热更新

window.$RefreshReg$ = () => {};
window.$RefreshSig$ = () => (type) => type;
window.__vite_plugin_react_preamble_installed__ = true;

export interface QiankunProps {
  container?: HTMLElement;
  [x: string]: any;
}

export interface QiankunLifeCycle {
  bootstrap: () => void | Promise<void>;
  mount: (props: QiankunProps) => void | Promise<void>;
  unmount: (props: QiankunProps) => void | Promise<void>;
  update: (props: QiankunProps) => void | Promise<void>;
}

export interface QiankunWindow {
  __POWERED_BY_QIANKUN__?: boolean;
  [x: string]: any;
}

export const qiankunWindow: QiankunWindow = window.proxy || window;

export const renderWithQiankun = (qiankunLifeCycle: QiankunLifeCycle) => {
  // 函数只有一次执行机会，需要把生命周期赋值给全局
  if (qiankunWindow?.__POWERED_BY_QIANKUN__) {
    if (!window.moduleQiankunAppLifeCycles) {
      window.moduleQiankunAppLifeCycles = {};
    }
    if (qiankunWindow.qiankunName) {
      window.moduleQiankunAppLifeCycles[qiankunWindow.qiankunName] = qiankunLifeCycle;
    }
  }
};

export default renderWithQiankun;

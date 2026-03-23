import { Header } from '../components/Header';

// TODO: 实现训练完成页面
// 参考 stitch 文件夹中的 code.html

export function Result() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      <Header />
      
      <main className="flex flex-1 justify-center py-8">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1 px-4 md:px-10">
          {/* TODO: 实现训练完成页面 */}
          <p className="text-center text-slate-500">训练完成页面 - 待实现</p>
        </div>
      </main>
    </div>
  );
}

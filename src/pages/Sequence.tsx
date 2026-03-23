import { Header } from '../components/Header';

// TODO: 实现序列记忆页面
// 参考 stitch 文件夹中的 code.html

export function Sequence() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      <Header 
        title="序列记忆训练" 
        showBack 
        onBack={() => console.log('Go back')}
      />
      
      <main className="flex flex-1 justify-center py-8 px-4 lg:px-40">
        <div className="layout-content-container flex flex-col max-w-[800px] flex-1">
          {/* TODO: 实现序列记忆训练 */}
          <p className="text-center text-slate-500">序列记忆训练页面 - 待实现</p>
        </div>
      </main>
    </div>
  );
}

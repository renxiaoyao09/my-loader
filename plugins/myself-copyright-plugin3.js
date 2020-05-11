class MyselfCopyrightPlugin {
	constructor(){
　　　　console.log('plugin3被使用了')
　　}
　　apply(compiler) {
		compiler.hooks.run.tapAsync('entryOption', (compilation, callback) => {
			// SyncBailHook
			// 在 entry 配置项处理过之后，执行插件。
					// console.log(compilation, callback)
				callback()
	    });
		// entryOption
		// SyncBailHook
		// 在 entry 配置项处理过之后，执行插件。

		// afterPlugins
		// SyncHook
		// 设置完初始插件之后，执行插件。
		// 参数：compiler

		// afterResolvers
		// SyncHook
		// resolver 安装完成之后，执行插件。
		// 参数：compiler

		// environment
		// SyncHook
		// environment 准备好之后，执行插件。

		// afterEnvironment
		// SyncHook
		// environment 安装完成之后，执行插件。

		// beforeRun
		// AsyncSeriesHook
		// compiler.run() 执行之前，添加一个钩子。
		// 参数：compiler

		// run
		// AsyncSeriesHook
		// 开始读取 records 之前，钩入(hook into) compiler。
		// 参数：compiler

		// watchRun
		// AsyncSeriesHook
		// 监听模式下，一个新的编译(compilation)触发之后，执行一个插件，但是是在实际编译开始之前。
		// 参数：compiler

		// normalModuleFactory
		// SyncHook
		// NormalModuleFactory 创建之后，执行插件。
		// 参数：normalModuleFactory

		// contextModuleFactory
		// ContextModuleFactory 创建之后，执行插件。
		// 参数：contextModuleFactory

		// beforeCompile
		// AsyncSeriesHook
		// 编译(compilation)参数创建之后，执行插件。
		// 参数：compilationParams

		// compile
		// SyncHook
		// 一个新的编译(compilation)创建之后，钩入(hook into) compiler。
		// 参数：compilationParams

		// thisCompilation
		// SyncHook
		// 触发 compilation 事件之前执行（查看下面的 compilation）。
		// 参数：compilation

		// compilation
		// SyncHook
		// 编译(compilation)创建之后，执行插件。
		// 参数：compilation

		// make
		// AsyncParallelHook
		// 参数：compilation

		// afterCompile
		// AsyncSeriesHook
		// 参数：compilation

		// shouldEmit
		// SyncBailHook
		// 此时返回 true/false。
		// 参数：compilation

		// needAdditionalPass
		// SyncBailHook

		// emit
		// AsyncSeriesHook
		// 生成资源到 output 目录之前。
		// 参数：compilation

		// afterEmit
		// AsyncSeriesHook
		// 生成资源到 output 目录之后。
		// 参数：compilation

		// done
		// SyncHook
		// 编译(compilation)完成。
		// 参数：stats

		// failed
		// SyncHook
		// 编译(compilation)失败。
		// 参数：error

		// invalid
		// SyncHook
		// 监听模式下，编译无效时。
		// 参数：fileName, changeTime

		// watchClose
		// SyncHook
		// 监听模式停止。
　　}
}
module.exports = MyselfCopyrightPlugin;
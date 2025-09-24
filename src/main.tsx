let pluginName: string

export async function load(_name: string) {
  pluginName = _name
  document.body.classList.add("kef-round-shell")
  orca.themes.injectCSSResource(`${pluginName}/dist/shell.css`, pluginName)
}

export async function unload() {
  // Clean up any resources used by the plugin here.
  orca.themes.removeCSSResources(pluginName)
  document.body.classList.remove("kef-round-shell")
}

// Kept outside plugins/ so it loads only through opencode.jsonc, which supplies its options.
export default {
  id: "local.env",
  async setup(ctx: {
    options: { vars?: Record<string, string> }
    shell: {
      hook(
        name: "create.before",
        callback: (event: { env: Record<string, string | undefined> }) => void,
      ): Promise<unknown>
    }
  }) {
    const vars = ctx.options.vars ?? {}
    await ctx.shell.hook("create.before", (event) => {
      Object.assign(event.env, vars)
    })
  },
}

# Personal preferences

- Modify files with the edit tool, not scripts (`sed`, `perl -i`, Python, heredocs). Use a script only for a repetitive edit across many locations or files.
- To limit a command's runtime, set the shell tool's `timeout` parameter. Do not wrap commands in the `timeout` command.
- Run tests on at most 4 workers/cores (e.g. `pytest -n 4`, `vitest --maxWorkers=4`, `playwright test --workers=4`). Never use `-n auto` or other all-cores settings.
- If `uv` is available, run Python through it (e.g. `uv run pytest`, `uv run python script.py`) instead of invoking `.venv/bin/python` or activating `.venv` directly.
- Before creating a worktree, ask whether I prefer a worktree or a local checkout. Skip asking only if there are significant uncommitted changes to tracked files (untracked files don't count), in which case use a worktree.

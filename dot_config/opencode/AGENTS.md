# Personal preferences

- Modify files with the edit tool, not scripts (`sed`, `perl -i`, Python, heredocs). Use a script only for a repetitive edit across many locations or files.
- To limit a command's runtime, set the shell tool's `timeout` parameter. Do not wrap commands in the `timeout` command.
- Run tests on at most 4 workers/cores (e.g. `pytest -n 4`, `vitest --maxWorkers=4`, `playwright test --workers=4`). Never use `-n auto` or other all-cores settings.

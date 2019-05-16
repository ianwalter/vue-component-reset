workflow "CI" {
  on = "push"
  resolves = ["Lint", "Test"]
}

action "Install" {
  uses = "docker://node:12-alpine"
  runs = "yarn"
}

action "Lint" {
  uses = "docker://node:12-alpine"
  needs = ["Install"]
  runs = "yarn"
  args = "lint"
}

action "Test" {
  uses = "docker://node:12-alpine"
  needs = ["Install"]
  runs = "yarn"
  args = "test"
}

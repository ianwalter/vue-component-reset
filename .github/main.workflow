workflow "CI" {
  on = "push"
  resolves = ["Lint", "Test"]
}

action "Install" {
  uses = "docker://node:12-alpine@sha256:c29fba1f3ea0c23ca3ab59367dc644a594c8186fe28067ea4ac7e51b4a0956a1"
  runs = "yarn"
}

action "Lint" {
  uses = "docker://node:12-alpine@sha256:c29fba1f3ea0c23ca3ab59367dc644a594c8186fe28067ea4ac7e51b4a0956a1"
  needs = ["Install"]
  runs = "yarn"
  args = "lint"
}

action "Test" {
  uses = "docker://node:12-alpine@sha256:c29fba1f3ea0c23ca3ab59367dc644a594c8186fe28067ea4ac7e51b4a0956a1"
  needs = ["Install"]
  runs = "yarn"
  args = "test"
}

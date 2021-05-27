import { withUnimodules } from "@expo/webpack-config/addons";
import { resolve } from "path";

export default function ({ config }) {
  return withUnimodules(config, {
    projectRoot: resolve(__dirname, "../")
  });
}

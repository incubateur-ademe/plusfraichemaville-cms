import { setPluginConfig, defaultHtmlPreset, type PluginConfig } from "@_sh/strapi-plugin-ckeditor";

const ckeditorConfig: PluginConfig = {
  presets: [defaultHtmlPreset],
};

export default {
  config: {
    locales: [],
  },
  register() {
    setPluginConfig(ckeditorConfig);
  },
};

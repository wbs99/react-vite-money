// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// src/vite_plugins/svgstore.js
import path from "path";
import fs from "fs";
import store from "svgstore";
import { optimize } from "svgo";
var svgstore = (options = {}) => {
  const inputFolder = options.inputFolder || "src/assets/icons";
  return {
    name: "svgstore",
    resolveId(id) {
      if (id === "@svgstore") {
        return "svg_bundle.js";
      }
    },
    load(id) {
      if (id === "svg_bundle.js") {
        const sprites = store(options);
        const iconsDir = path.resolve(inputFolder);
        for (const file of fs.readdirSync(iconsDir)) {
          const filepath = path.join(iconsDir, file);
          const svgid = path.parse(file).name;
          let code2 = fs.readFileSync(filepath, { encoding: "utf-8" });
          sprites.add(svgid, code2);
        }
        const { data: code } = optimize(sprites.toString({ inline: options.inline }), {
          plugins: [
            "cleanupAttrs",
            "removeDoctype",
            "removeComments",
            "removeTitle",
            "removeDesc",
            "removeEmptyAttrs",
            { name: "removeAttrs", params: { attrs: "(data-name|data-xxx)" } }
          ]
        });
        return `const div = document.createElement('div')
div.innerHTML = \`${code}\`
const svg = div.getElementsByTagName('svg')[0]
if (svg) {
  svg.style.position = 'absolute'
  svg.style.width = 0
  svg.style.height = 0
  svg.style.overflow = 'hidden'
  svg.setAttribute("aria-hidden", "true")
}
// listen dom ready event
document.addEventListener('DOMContentLoaded', () => {
  if (document.body.firstChild) {
    document.body.insertBefore(div, document.body.firstChild)
  } else {
    document.body.appendChild(div)
  }
})`;
      }
    }
  };
};

// vite.config.ts
var vite_config_default = defineConfig({
  plugins: [react(), svgstore()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAic3JjL3ZpdGVfcGx1Z2lucy9zdmdzdG9yZS5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXHdic1xcXFx2aXRlLXJlYWN0LXRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFx3YnNcXFxcdml0ZS1yZWFjdC10c1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovd2JzL3ZpdGUtcmVhY3QtdHMvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuXG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0IHsgc3Znc3RvcmUgfSBmcm9tICcuL3NyYy92aXRlX3BsdWdpbnMvc3Znc3RvcmUnO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCksIHN2Z3N0b3JlKCksXVxufSlcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcd2JzXFxcXHZpdGUtcmVhY3QtdHNcXFxcc3JjXFxcXHZpdGVfcGx1Z2luc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcd2JzXFxcXHZpdGUtcmVhY3QtdHNcXFxcc3JjXFxcXHZpdGVfcGx1Z2luc1xcXFxzdmdzdG9yZS5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovd2JzL3ZpdGUtcmVhY3QtdHMvc3JjL3ZpdGVfcGx1Z2lucy9zdmdzdG9yZS5qc1wiOy8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IGZzIGZyb20gJ2ZzJ1xuaW1wb3J0IHN0b3JlIGZyb20gJ3N2Z3N0b3JlJyAvLyBcdTc1MjhcdTRFOEVcdTUyMzZcdTRGNUMgU1ZHIFNwcml0ZXNcbmltcG9ydCB7IG9wdGltaXplIH0gZnJvbSAnc3ZnbycgLy8gXHU3NTI4XHU0RThFXHU0RjE4XHU1MzE2IFNWRyBcdTY1ODdcdTRFRjZcblxuZXhwb3J0IGNvbnN0IHN2Z3N0b3JlID0gKG9wdGlvbnMgPSB7fSkgPT4ge1xuICBjb25zdCBpbnB1dEZvbGRlciA9IG9wdGlvbnMuaW5wdXRGb2xkZXIgfHwgJ3NyYy9hc3NldHMvaWNvbnMnO1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdzdmdzdG9yZScsXG4gICAgcmVzb2x2ZUlkKGlkKSB7XG4gICAgICBpZiAoaWQgPT09ICdAc3Znc3RvcmUnKSB7XG4gICAgICAgIHJldHVybiAnc3ZnX2J1bmRsZS5qcydcbiAgICAgIH1cbiAgICB9LFxuICAgIGxvYWQoaWQpIHtcbiAgICAgIGlmIChpZCA9PT0gJ3N2Z19idW5kbGUuanMnKSB7XG4gICAgICAgIGNvbnN0IHNwcml0ZXMgPSBzdG9yZShvcHRpb25zKTtcbiAgICAgICAgY29uc3QgaWNvbnNEaXIgPSBwYXRoLnJlc29sdmUoaW5wdXRGb2xkZXIpO1xuICAgICAgICBmb3IgKGNvbnN0IGZpbGUgb2YgZnMucmVhZGRpclN5bmMoaWNvbnNEaXIpKSB7XG4gICAgICAgICAgY29uc3QgZmlsZXBhdGggPSBwYXRoLmpvaW4oaWNvbnNEaXIsIGZpbGUpO1xuICAgICAgICAgIGNvbnN0IHN2Z2lkID0gcGF0aC5wYXJzZShmaWxlKS5uYW1lXG4gICAgICAgICAgbGV0IGNvZGUgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZXBhdGgsIHsgZW5jb2Rpbmc6ICd1dGYtOCcgfSk7XG4gICAgICAgICAgc3ByaXRlcy5hZGQoc3ZnaWQsIGNvZGUpXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBkYXRhOiBjb2RlIH0gPSBvcHRpbWl6ZShzcHJpdGVzLnRvU3RyaW5nKHsgaW5saW5lOiBvcHRpb25zLmlubGluZSB9KSwge1xuICAgICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICAgICdjbGVhbnVwQXR0cnMnLCAncmVtb3ZlRG9jdHlwZScsICdyZW1vdmVDb21tZW50cycsICdyZW1vdmVUaXRsZScsICdyZW1vdmVEZXNjJyxcbiAgICAgICAgICAgICdyZW1vdmVFbXB0eUF0dHJzJyxcbiAgICAgICAgICAgIHsgbmFtZTogXCJyZW1vdmVBdHRyc1wiLCBwYXJhbXM6IHsgYXR0cnM6IFwiKGRhdGEtbmFtZXxkYXRhLXh4eClcIiB9IH1cbiAgICAgICAgICBdXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmRpdi5pbm5lckhUTUwgPSBcXGAke2NvZGV9XFxgXG5jb25zdCBzdmcgPSBkaXYuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3N2ZycpWzBdXG5pZiAoc3ZnKSB7XG4gIHN2Zy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcbiAgc3ZnLnN0eWxlLndpZHRoID0gMFxuICBzdmcuc3R5bGUuaGVpZ2h0ID0gMFxuICBzdmcuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xuICBzdmcuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgXCJ0cnVlXCIpXG59XG4vLyBsaXN0ZW4gZG9tIHJlYWR5IGV2ZW50XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBpZiAoZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKSB7XG4gICAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoZGl2LCBkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpXG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpXG4gIH1cbn0pYFxuICAgICAgfVxuICAgIH1cbiAgfVxufSJdLAogICJtYXBwaW5ncyI6ICI7QUFBb1AsU0FBUyxvQkFBb0I7QUFDalIsT0FBTyxXQUFXOzs7QUNBbEIsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sUUFBUTtBQUNmLE9BQU8sV0FBVztBQUNsQixTQUFTLGdCQUFnQjtBQUVsQixJQUFNLFdBQVcsQ0FBQyxVQUFVLENBQUMsTUFBTTtBQUN4QyxRQUFNLGNBQWMsUUFBUSxlQUFlO0FBQzNDLFNBQU87QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLFVBQVUsSUFBSTtBQUNaLFVBQUksT0FBTyxhQUFhO0FBQ3RCLGVBQU87QUFBQSxNQUNUO0FBQUEsSUFDRjtBQUFBLElBQ0EsS0FBSyxJQUFJO0FBQ1AsVUFBSSxPQUFPLGlCQUFpQjtBQUMxQixjQUFNLFVBQVUsTUFBTSxPQUFPO0FBQzdCLGNBQU0sV0FBVyxLQUFLLFFBQVEsV0FBVztBQUN6QyxtQkFBVyxRQUFRLEdBQUcsWUFBWSxRQUFRLEdBQUc7QUFDM0MsZ0JBQU0sV0FBVyxLQUFLLEtBQUssVUFBVSxJQUFJO0FBQ3pDLGdCQUFNLFFBQVEsS0FBSyxNQUFNLElBQUksRUFBRTtBQUMvQixjQUFJQSxRQUFPLEdBQUcsYUFBYSxVQUFVLEVBQUUsVUFBVSxRQUFRLENBQUM7QUFDMUQsa0JBQVEsSUFBSSxPQUFPQSxLQUFJO0FBQUEsUUFDekI7QUFDQSxjQUFNLEVBQUUsTUFBTSxLQUFLLElBQUksU0FBUyxRQUFRLFNBQVMsRUFBRSxRQUFRLFFBQVEsT0FBTyxDQUFDLEdBQUc7QUFBQSxVQUM1RSxTQUFTO0FBQUEsWUFDUDtBQUFBLFlBQWdCO0FBQUEsWUFBaUI7QUFBQSxZQUFrQjtBQUFBLFlBQWU7QUFBQSxZQUNsRTtBQUFBLFlBQ0EsRUFBRSxNQUFNLGVBQWUsUUFBUSxFQUFFLE9BQU8sdUJBQXVCLEVBQUU7QUFBQSxVQUNuRTtBQUFBLFFBQ0YsQ0FBQztBQUNELGVBQU87QUFBQSxvQkFDSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFpQmQ7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGOzs7QUQ5Q0EsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUU7QUFDaEMsQ0FBQzsiLAogICJuYW1lcyI6IFsiY29kZSJdCn0K

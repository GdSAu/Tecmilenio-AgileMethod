import { reactExports, asPluginWidgets, PlaceholderProperty } from './index-CAr0kpKK.js';
import { ScrollContainer, Placeholder } from './ScrollContainer-ClJHkivb.js';

const React = { createElement: reactExports.createElement };
const { $ScrollContainer, $Placeholder } = asPluginWidgets({ ScrollContainer, Placeholder });
const region$Main = [
  /* @__PURE__ */ React.createElement(
    $ScrollContainer,
    {
      key: "l.Atlas_Core.PopupLayout.scrollContainer1",
      $widgetId: "l.Atlas_Core.PopupLayout.scrollContainer1",
      class: "mx-name-scrollContainer1",
      style: void 0,
      scrollPerRegion: true,
      layoutMode: "headline",
      top: {
        "enabled": false
      },
      bottom: {
        "enabled": false
      },
      left: {
        "enabled": false
      },
      right: {
        "enabled": false
      },
      center: {
        "content": [
          /* @__PURE__ */ React.createElement(
            $Placeholder,
            {
              key: "l.Atlas_Core.PopupLayout.Main",
              $widgetId: "l.Atlas_Core.PopupLayout.Main",
              content: PlaceholderProperty({
                "id": "Atlas_Core.PopupLayout.Main"
              })
            }
          )
        ],
        "class": "region-content"
      }
    }
  )
];
const content = {
  "Main": region$Main
};

export { content };

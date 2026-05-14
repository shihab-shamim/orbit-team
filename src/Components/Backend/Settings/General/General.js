import { __ } from "@wordpress/i18n";

import {
  PanelBody,
  SelectControl,
  TextControl,
  ToggleControl,
} from "@wordpress/components";
import { updateData } from "../../../../utils/functions";

const General = ({ attributes, setAttributes }) => {
  const { orbitTeam = {}, options = {} } = attributes;

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Header", "orbit-team")}
        initialOpen={false}
      >
        {options?.showTag && (
          <TextControl
            label={__("Tag", "orbit-team")}
            className="mt10"
            placeholder="Enter tag"
            value={orbitTeam.tag}
            onChange={(v) =>
              setAttributes({ orbitTeam: updateData(orbitTeam, v, "tag") })
            }
          />
        )}
        {options?.showTitle && (
          <TextControl
            label={__("Title", "orbit-team")}
            className="mt10"
            placeholder="Enter title"
            value={orbitTeam.title}
            onChange={(v) =>
              setAttributes({ orbitTeam: updateData(orbitTeam, v, "title") })
            }
          />
        )}
        {options?.showSubTitle && (
          <TextControl
            label={__("Sub Title", "orbit-team")}
            className="mt10"
            placeholder="Enter sub title"
            value={orbitTeam.subTitle}
            onChange={(v) =>
              setAttributes({ orbitTeam: updateData(orbitTeam, v, "subTitle") })
            }
          />
        )}
      </PanelBody>
      <PanelBody
        initialOpen={false}
        className="bPlPanelBody"
        title={__("Elements", "orbit-team")}
      >
        <ToggleControl
          className="mt10"
          label={__("Show Tag", "orbit-team")}
          checked={options.showTag}
          onChange={(v) =>
            setAttributes({ options: updateData(options, v, "showTag") })
          }
        />
        <ToggleControl
          className="mt10"
          label={__("Show Title", "orbit-team")}
          checked={options.showTitle}
          onChange={(v) =>
            setAttributes({ options: updateData(options, v, "showTitle") })
          }
        />
        <ToggleControl
          className="mt10"
          label={__("Show Sub Title", "orbit-team")}
          checked={options.showSubTitle}
          onChange={(v) =>
            setAttributes({ options: updateData(options, v, "showSubTitle") })
          }
        />
      </PanelBody>
    </>
  );
};

export default General;

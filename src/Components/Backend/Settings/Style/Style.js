import { useState } from "react";
import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  __experimentalUnitControl as UnitControl,
} from "@wordpress/components";
import {
  Background,
  BoxControl,
  ColorControl,
  Typography,
} from "../../../../../../bpl-tools/Components";
const Style = ({ attributes, setAttributes }) => {
  const { styles = {} } = attributes;

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Container", "orbit-team")}
        initialOpen={false}
      >
        <Background
          value={styles.bg}
          onChange={(value) =>
            setAttributes({ styles: { ...styles, bg: value } })
          }
        />

        <UnitControl
          className="mt10"
          label={__("MinHeight", "orbit-team")}
          step={1}
          value={styles?.height}
          onChange={(value) =>
            setAttributes({ styles: { ...styles, height: value } })
          }
        />
        <BoxControl
          label={__("Border Radius", "orbit-team")}
          className="mt10"
          values={styles?.radius}
          onChange={(value) =>
            setAttributes({ styles: { ...styles, radius: value } })
          }
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Header", "orbit-team")}
        initialOpen={false}
      >
        <ColorControl
          label={__("Tag Color", "orbit-team")}
          value={styles?.header?.color}
          onChange={(value) =>
            setAttributes({
              styles: { ...styles, header: { ...styles.header, color: value } },
            })
          }
        />
        <Typography
          className="mt10"
          label={__("Tag Typography", "orbit-team")}
          value={styles?.header?.typo}
          onChange={(value) =>
            setAttributes({
              styles: { ...styles, header: { ...styles.header, typo: value } },
            })
          }
        />
        <BoxControl
          label={__("Tag Padding", "orbit-team")}
          className="mt10"
          values={styles?.header?.padding}
          onChange={(value) =>
            setAttributes({
              styles: {
                ...styles,
                header: { ...styles.header, padding: value },
              },
            })
          }
        />
        <BoxControl
          label={__("Tag Border Radius", "orbit-team")}
          className="mt10"
          values={styles?.header?.radius}
          onChange={(value) =>
            setAttributes({
              styles: {
                ...styles,
                header: { ...styles.header, radius: value },
              },
            })
          }
        />

        <ColorControl
          label={__("Title Color", "orbit-team")}
          value={styles?.header?.title?.color}
          onChange={(value) =>
            setAttributes({
              styles: {
                ...styles,
                header: {
                  ...styles.header,
                  title: { ...styles.header.title, color: value },
                },
              },
            })
          }
        />
        <Typography
          className="mt10"
          label={__("Title Typography", "orbit-team")}
          value={styles?.header?.title?.typo}
          onChange={(value) =>
            setAttributes({
              styles: {
                ...styles,
                header: {
                  ...styles.header,
                  title: { ...styles.header.title, typo: value },
                },
              },
            })
          }
        />
        <ColorControl
          label={__("Sub Title Color", "orbit-team")}
          value={styles?.header?.subTitle?.color}
          onChange={(value) =>
            setAttributes({
              styles: {
                ...styles,
                header: {
                  ...styles.header,
                  subTitle: { ...styles.header.subTitle, color: value },
                },
              },
            })
          }
        />
        <Typography
          className="mt10"
          label={__("Sub Title Typography", "orbit-team")}
          value={styles?.header?.subTitle?.typo}
          onChange={(value) =>
            setAttributes({
              styles: {
                ...styles,
                header: {
                  ...styles.header,
                  subTitle: { ...styles.header.subTitle, typo: value },
                },
              },
            })
          }
        />
      </PanelBody>
    </>
  );
};

export default Style;

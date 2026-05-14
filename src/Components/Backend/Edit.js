import { useBlockProps } from "@wordpress/block-editor";

import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import GalaxyTeam from "../Frontend/Cards";

const Edit = (props) => {
  const { attributes, setAttributes, clientId } = props;
  const { purposeType } = attributes;

  return (
    <>
      <Settings {...{ attributes, setAttributes }} />

      <div {...useBlockProps()}>
        <Style attributes={attributes} id={`block-${clientId}`} />
        <GalaxyTeam />
      </div>
    </>
  );
};
export default Edit;

import React, { useEffect, useRef } from "react";
import "./Editor.styles.css";

import ACTIONS from "./../../actionsClient";

import Codemirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/hint/show-hint"
import "codemirror/addon/hint/javascript-hint"
import "codemirror/addon/hint/show-hint.css"

const Editor = ({ socketRef, roomId, onCodeChange }) => {
  const editorRef = useRef(null);

  useEffect(() => {
    const editorInit = async () => {
      editorRef.current = Codemirror.fromTextArea(
        document.querySelector("#realtimeEditor"),
        {
          mode: { name: "javascript", globalVars: true },
          theme: "dracula",
          autoCloseTags: true,
          autoCloseBrackets: true,
          lineNumbers: true,
          tabSize: 3,
          showHint: true,
          hintOptions: true,
          extraKeys: {
            "Ctrl-Space": "autocomplete",
          },
        }
      );
      //changes hold the changes in the editor ref and instance is the editorRef instance in use
      editorRef.current.on("change", (instance, changes) => {
        const { origin } = changes;
        const code = instance.getValue();
        onCodeChange(code);
        if (origin !== "setValue") {
          socketRef.current.emit(ACTIONS.CODE_CHANGE, {
            roomId,
            code,
          });
        }
      });
    };
    editorInit();
  }, []);

  useEffect(() => {
    if (socketRef.current) {
      socketRef.current.on(ACTIONS.CODE_CHANGE, ({ code }) => {
        if (code !== null) {
          editorRef.current.setValue(code);
        }
      });
    }
    //cleanup to unsubscribe
    return () => {
      socketRef.current.off(ACTIONS.CODE_CHANGE);
    };
  }, [socketRef.current]);

  return <textarea id='realtimeEditor'></textarea>;
};

export default Editor;

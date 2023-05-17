import React from "react";
import { StyleSheet, Dimensions } from "react-native/types";

const containers = (appSettings) =>
  StyleSheet.create({
    outerPage: {
      backgroundColor:
        "foregroundColor" in appSettings
          ? appSettings["backgroundColor"]
          : "#ffffff",
    },
  });

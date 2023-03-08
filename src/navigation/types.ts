/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
  RouteProp,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

// DEFAULT NAVIGATION

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  chat_screen: { id: string; name: string };
  chat_list_screen: undefined;
  home: any;
  non_implemented_screen: undefined;
  status_screen: undefined;
  settings_screen: undefined;
  camera_screen: undefined;
  calls_screen: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

// BOTTOM TAB NAVIGATION

export type RootTabParamList = {
  non_implemented_screen: undefined;
  chat_list_screen: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

// ROUTE PARAMS

export type ChatScreenRouteProp = RouteProp<RootStackParamList, "chat_screen">;

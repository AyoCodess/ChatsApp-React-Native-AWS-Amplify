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
  chat_screens: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

// BOTTOM TAB NAVIGATION

export type RootTabParamList = {
  chat_screen: { id: string; name: string };
  chat_screens: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

// ROUTE PARAMS

export type ChatScreenRouteProp = RouteProp<RootStackParamList, "chat_screen">;

import type { TUserDetails } from "@/types/user";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useUsersStore = defineStore({
  id: "usersStore",
  state: () => ({
    users: [] as TUserDetails[],
    user: {} as TUserDetails,
  }),
  actions: {
    async getUsers() {
      try {
        const data = await $fetch<TUserDetails[]>(`${BASE_URL}/users`);
        this.users = data;
      } catch (error) {
        console.error("Failed to fetch statistics:", error);
      }
    },
    async getUser(id: number) {
      try {
        const data = await $fetch<TUserDetails>(`${BASE_URL}/users/${id}`);
        this.user = data;
      } catch (error) {
        console.error("Failed to fetch statistics:", error);
      }
    },
  },
});

import { useQuery } from "convex/react";
import { Id } from "../../../../convex/_generated/dataModel";
import { api } from "../../../../convex/_generated/api";

interface UseGetMemberSingleProps {
  id: Id<"members">;
}
export const useGetMemberSingle = ({ id }: UseGetMemberSingleProps) => {
  const data = useQuery(api.members.getById, { id });
  const isLoading = data === undefined;
  return { data, isLoading };
};

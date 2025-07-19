import { useProfileMemberId } from "@/features/members/store/use-profile-member-id";
import { useParentMessageId } from "@/features/messages/store/use-parent-message";

export const usePanel = () => {
  const [parentMessageId, setParentMessageId] = useParentMessageId();
  const [profileMemberId, setProfileMemberId] = useProfileMemberId();

  const onOpenProfile = (memberId: string) => {
    setProfileMemberId(memberId);
    setParentMessageId(null);
  };

  const onOpenMessage = (messageid: string) => {
    setParentMessageId(messageid);
    setProfileMemberId(null);
  };
  const onClose = () => {
    setParentMessageId(null);
    setProfileMemberId(null);
  };
  return {
    onOpenMessage,
    onOpenProfile,
    onClose,
    parentMessageId,
    profileMemberId,
  };
};

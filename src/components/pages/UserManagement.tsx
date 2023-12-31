import { Center, Spinner, useDisclosure, Wrap, WrapItem } from "@chakra-ui/react";
import { memo, useCallback, useEffect } from "react";
import { useAllUsers } from "../../hooks/useAllUsers";
import { useLoginUser } from "../../hooks/useLoginUser";
import { useSelectUser } from "../../hooks/useSelectUser";
import { UserCard } from "../organisms/user/UserCard";
import { UserDetailModal } from "../organisms/user/UserDetailModal";

export const UserManagement = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, loading, users } = useAllUsers();
  const { onSelectUser, selectedUser } = useSelectUser();
  const { loginUser } = useLoginUser();

  useEffect(() => getUsers(), [])
  const onClickUser = useCallback((id: number) => {
    onSelectUser({ id, users, onOpen })
  }, [users, onSelectUser, onOpen]);

  return (
    <>
      {loading ? (<Center h="100vh"><Spinner /></Center>) : (
        <Wrap p={{base: 4, md:10,}}>
            {users.map((users) => (
              <WrapItem key={users.id} mx="auto">
              <UserCard imageUrl="https://source.unsplash.com/random" id={users.id} userName={users.username} fullName={users.name} onClick={onClickUser}/>
              </WrapItem>
            ))}
        </Wrap>
      )}
      <UserDetailModal user={selectedUser} isOpen={isOpen} isAdmin={loginUser?.isAdmin} onClose={onClose} />
    </>
  );
});

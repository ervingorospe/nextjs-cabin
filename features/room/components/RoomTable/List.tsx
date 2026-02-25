"use client";
import { useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Pagination from "@/components/ui/Pagination";
import Table from "@/components/ui/Table";
import Item from "./Item";

import Modal from "@/components/ui/Modal";
import IconLayout from "@/components/ui/icons/IconLayout";
import Warning from "@/components/ui/icons/Warning";

import { ListProps } from "@/types/menu.type";
import { ModalHandle } from "@/types/modal.type";
import { sizes } from "@/types/size.type";
import { colors } from "@/types/color.type";
import type { Room, Action } from "@/features/room/types";
import { actions } from "@/features/room/types";
import { theaders } from "@/features/room/constants";
import { Stack, Typography, Button } from "@mui/material";

const Dialog = dynamic(() => import("@/components/ui/Dialog"), { ssr: false });

export default function RoomList({ rooms }: { rooms: Room[] }) {
  const modalRef = useRef<ModalHandle>(null);
  const [actionType, setActionType] = useState<Action | null>(null);

  const action = (type: Action) => {
    modalRef.current?.setOpen();
    setActionType(type);
  };

  const menuList: ListProps[] = useMemo(
    () => [
      {
        label: "View/Edit",
        action: () => action(actions.VIEW),
      },
      {
        label: "Available",
        action: () => action(actions.STATUS),
      },
      {
        label: "Delete",
        action: () => action(actions.DELETE),
      },
    ],
    [],
  );

  const displayedRooms = useMemo(() => {
    return rooms?.slice(0, 20) || [];
  }, [rooms]);

  const doConfirm = async () => {
    alert(actionType);
  };

  return (
    <Stack>
      <Table>
        <Table.Head theaders={theaders} />
        <Table.Body>
          {displayedRooms?.map((room: Room) => (
            <Item room={room} key={room.id} menuList={menuList} />
          ))}
        </Table.Body>
      </Table>

      <Pagination count={rooms.length} />

      <Modal ref={modalRef} size={sizes.SMALL}>
        {actionType === "view" ? (
          <p>viewing</p>
        ) : (
          <Dialog
            title={`${actionType === actions.STATUS ? "Change Status" : "Delete Room"}`}
            onClose={() => modalRef.current?.setOpen()}
            renderDialog={
              <>
                {actionType === actions.STATUS ? (
                  <Stack>
                    <Typography variant="body1">
                      Are you sure you want to change status?
                    </Typography>
                  </Stack>
                ) : (
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    color="warning.main"
                  >
                    <IconLayout className="h-4 w-4">
                      <Warning />
                    </IconLayout>

                    <Typography variant="body1">
                      Are you sure you want to delete?
                    </Typography>
                  </Stack>
                )}
              </>
            }
            renderButton={
              actionType === actions.DELETE ? (
                <Button onClick={doConfirm} color={colors.WARNING}>
                  Delete
                </Button>
              ) : (
                <Button onClick={doConfirm}>Confirm</Button>
              )
            }
          />
        )}
      </Modal>
    </Stack>
  );
}

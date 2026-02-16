"use client";
import { useMemo, useRef, useState, Suspense } from "react";
import dynamic from "next/dynamic";
import Pagination from "@/components/ui/Pagination";
import Table from "@/components/ui/Table";
import RoomList from "@/features/room/components/RoomList";
import EmptyList from "@/components/ui/EmptyList";
import Modal from "@/components/ui/Modal";
import IconLayout from "@/components/ui/icons/IconLayout";
import Warning from "@/components/ui/icons/Warning";
import { TableHeader } from "@/types/table.type";
import { ListProps } from "@/types/menu.type";
import { ModalHandle } from "@/types/modal.type";
import { sizes } from "@/types/size.type";
import { colors } from "@/types/color.type";

const Dialog = dynamic(() => import("@/components/ui/Dialog"), { ssr: false });

//to be removed
import { sampleData } from "@/features/room/fields";
import Button from "@/components/ui/Button";

const actions = {
  VIEW: "view",
  STATUS: "status",
  DELETE: "delete",
} as const;

type Action = (typeof actions)[keyof typeof actions];

const theaders: TableHeader[] = [
  {
    label: "ID",
    className: "",
  },
  {
    label: "Room Name",
    className: "",
  },
  {
    label: "Price",
    className: "",
  },
  {
    label: "Discount",
    className: "",
  },
  {
    label: "Status",
    className: "",
  },
  {
    label: "",
    className: "",
  },
];

export default function RoomTable() {
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
    return sampleData?.slice(0, 20) || [];
  }, []);

  if (sampleData?.length <= 0) {
    return (
      <EmptyList message="No Room Added, Click Add Room to Get Started." />
    );
  }

  return (
    <div className="grid gap-2">
      <Suspense fallback={null}>
        <Table>
          <Table.Head theaders={theaders} />
          <Table.Body>
            {displayedRooms?.map((room) => (
              <RoomList room={room} key={room.id} menuList={menuList} />
            ))}
          </Table.Body>
        </Table>
        <Pagination count={sampleData.length} />
      </Suspense>

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
                  <div className="flex gap-2">
                    <p>Are you sure you want to change status?</p>
                  </div>
                ) : (
                  <div className="flex gap-2 text-red-600">
                    <IconLayout className="h-6 w-6">
                      <Warning />
                    </IconLayout>
                    <p>Are you sure you want to delete?</p>
                  </div>
                )}
              </>
            }
            renderButton={
              actionType === actions.DELETE ? (
                <Button onClick={() => {}} color={colors.WARNING}>
                  Delete
                </Button>
              ) : (
                <Button>Confirm</Button>
              )
            }
          />
        )}
      </Modal>
    </div>
  );
}

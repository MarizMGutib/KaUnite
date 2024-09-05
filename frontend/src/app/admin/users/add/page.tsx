"use client";
import React from "react";
import Button from "@/components/adminButton";
const Add = () => {
  function handleAdd(): void {
    throw new Error("Function not implemented.");
  }

  function handleCancel(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="w-full">
      <div className="w-full text-center">
        <h1 className="mb-6 flex items-center justify-center pt-[4rem] text-2xl font-bold ">
          Add User
        </h1>
      </div>
      <form className="flex w-full gap-4 px-[20rem] pt-[8rem]">
        <div className="">
          <div className="mb-4 w-[25rem] pl-[4rem]">
            <label htmlFor="name" className="mb-2 block">
              {" "}
              First Name
            </label>
            <input
              type="text"
              id="fname"
              name="fname"
              className="w-full rounded-lg border px-3 py-2"
              required
            />
          </div>
          <div className="mb-4 pl-[4rem]">
            <label htmlFor="name" className="mb-2 block">
              {" "}
              Last Name
            </label>
            <input
              type="text"
              id="lname"
              name="lname"
              className="w-full rounded-lg border px-3 py-2"
              required
            />
          </div>
          <div className="mb-4 pl-[4rem]">
            <label htmlFor="name" className="mb-2 block">
              M.I
            </label>
            <input
              type="text"
              id="mname"
              name="mname"
              className="w-full rounded-lg border px-3 py-2"
              required
            />
          </div>
          <div className="mb-4 pl-[4rem]">
            <label htmlFor="email" className="mb-2 block">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full rounded-lg border px-3 py-2"
              required
            />
          </div>
        </div>
        <div className="w-[30rem] pl-[10rem]">
          <div className="mb-4">
            <label htmlFor="phone" className="mb-2 block">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full rounded-lg border px-3 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="role" className="mb-2 block">
              Role
            </label>
            <select
              id="role"
              name="role"
              className="w-full rounded-lg border px-3 py-2"
              required
            >
              <option value="">Select a role</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="status" className="mb-2 block">
              Status
            </label>
            <select
              id="status"
              name="status"
              className="w-full rounded-lg border px-3 py-2"
              required
            >
              <option value="">Select a status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <div className="flex justify-center gap-4 w-[22rem] pt-[5rem]">
            <Button variant="cancel" onClick={handleCancel}>
              Cancel
            </Button>
            <Button variant="add" onClick={handleAdd}>
              Add User
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Add;

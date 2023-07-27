import { NextResponse } from "next/server";
import { AccountsService } from "@/services/AccountsService";

export async function GET(request, { params }) {
  const { accountId } = params;
  const api = new AccountsService(accountId);
  const response = await api.get();
  return NextResponse.json(response);
}

export async function POST(request, { params }) {
  const { accountId } = params;
  const body = await request.json();
  const api = new AccountsService(accountId);
  const response = await api.post(body);
  return NextResponse.json(response);
}

export async function PUT(request, { params }) {
  const { accountId } = params;
  const body = await request.json();
  const api = new AccountsService(accountId);
  const response = await api.put(body);
  return NextResponse.json(response);
}

export async function DELETE(request, { params }) {
  const { accountId } = params;
  const api = new AccountsService(accountId);
  const response = await api.delete();
  return NextResponse.json(response);
}

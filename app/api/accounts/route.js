import { NextResponse } from "next/server";
import { AccountsService } from "@/services/AccountsService";

export async function POST(request) {
  const body = await request.json();
  const api = new AccountsService();
  const response = await api.post(body);
  return NextResponse.json(response);
}

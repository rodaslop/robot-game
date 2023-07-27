import { NextResponse } from "next/server";
import { TodosService } from "@/services/TodosService";

export async function GET(request, { params }) {
  const { searchParams } = new URL(request.url);
  const archived = searchParams.get("archived");
  const { accountId } = params;
  const api = new TodosService(accountId);
  const response = await api.getAll({
    archived: !!archived,
  });
  return NextResponse.json(response);
}

export async function POST(request, { params }) {
  const { accountId } = params;
  const body = await request.json();
  const api = new TodosService(accountId);
  const response = await api.post(body);
  return NextResponse.json(response);
}

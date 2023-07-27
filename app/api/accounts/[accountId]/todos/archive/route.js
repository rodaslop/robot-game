import { NextResponse } from "next/server";
import { TodosService } from "@/services/TodosService";

export async function PUT(request, { params }) {
  const { accountId } = params;
  const { ids } = await request.json();
  const api = new TodosService(accountId);
  const response = await api.archiveTodos(ids);
  return NextResponse.json(response);
}

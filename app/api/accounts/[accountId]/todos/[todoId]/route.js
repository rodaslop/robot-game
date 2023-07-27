import { NextResponse } from "next/server";
import { TodosService } from "@/services/TodosService";

export async function GET(request, { params }) {
  const { accountId, todoId } = params;
  const api = new TodosService(accountId);
  const response = await api.getById(todoId);
  return NextResponse.json(response);
}

export async function PUT(request, { params }) {
  const { accountId, todoId } = params;
  const body = await request.json();
  const api = new TodosService(accountId);
  const response = await api.put(todoId, body);
  return NextResponse.json(response);
}

export async function DELETE(request, { params }) {
  const { accountId, todoId } = params;
  const api = new TodosService(accountId);
  const response = await api.delete(todoId);
  return NextResponse.json(response);
}
